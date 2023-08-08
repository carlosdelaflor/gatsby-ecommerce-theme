// https://stackoverflow.com/questions/63124432/how-do-i-configure-mini-css-extract-plugin-in-gatsby
exports.onCreateWebpackConfig = (helper) => {
  const { stage, actions, getConfig } = helper;
  const config = getConfig();
  console.log('stage >>>>>>>>> ' + stage);
  // Added when pdf-react was added.
  if (stage === 'develop-html' || stage === 'build-html') {
    //pdf-react fix
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    actions.replaceWebpackConfig(config);
  }

  //Inicial load from github repo fork
  if (stage === 'develop' || stage === 'build-javascript') {
    //const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};
