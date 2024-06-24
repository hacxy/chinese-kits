import { MarkdownTheme, MarkdownRendererEvent, MarkdownPageEvent } from 'typedoc-plugin-markdown';
import fs from 'fs';
// import { MarkdownEvent } from 'typedoc';

const handleNavigation = (navigation = []) => {
  // 处理导航栏
  const newNavigationData = navigation.map((item) => {
    const newItem = {
      text: item.title
    };

    if (item?.url) {
      newItem.link = `/src/${item.url}`;
    }

    if (item?.children) {
      newItem.items = handleNavigation(item?.children);
      newItem.collapsed = true;
    }

    return newItem;
  });
  return newNavigationData;
};

export function load(app) {
  app.renderer.markdownHooks.on('content.begin', (model) => {
    const nameInfo = model.page.model.signatures?.[0]?.comment?.blockTags?.find((item) => item.tag === '@name');
    const finalInfo = model.page.model.signatures?.[0]?.comment?.blockTags?.filter((item) => item.tag !== '@name');

    if (finalInfo) model.page.model.signatures[0].comment.blockTags = finalInfo;
    const name = nameInfo?.content?.[0]?.text;
    return name ? `### ${name}` : '';
  });

  app.renderer.on(MarkdownPageEvent.END, (event) => {
    event.contents = event.contents.replace('Example', '示例');
    event.contents = event.contents.replace('Signature', '函数签名');
  });

  app.renderer.on(MarkdownRendererEvent.BEGIN, () => {
    // event.contents = event.contents.replace('Type Aliases', '类型');

    // 生成侧边导航栏
    app.renderer.postRenderAsyncJobs.push(async (event) => {
      const navigation = handleNavigation(event.navigation);
      fs.writeFileSync('./docs/.vitepress/navigation.json', JSON.stringify(navigation));
    });
  });

  app.renderer.defineTheme('themeExpand', MyMarkdownTheme);

  // // 生成侧边导航栏
  // app.renderer.postRenderAsyncJobs.push(async (event) => {
  //   const navigation = handleNavigation(event.navigation);
  //   fs.writeFileSync('./docs/.vitepress/navigation.json', JSON.stringify(navigation));
  // });
}

class MyMarkdownTheme extends MarkdownTheme {
  constructor(renderer) {
    super(renderer);
  }
}
