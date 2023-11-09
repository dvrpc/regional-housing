exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path === "/") {
    page.context.layout = "home";
    createPage(page);
  } else if (page.path === "/about/") {
    page.context.layout = "about";
    createPage(page);
  }
};
