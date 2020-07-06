const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: Path.resolve(__dirname, '../src/scripts/index.js'),
    homerappel:Path.resolve(__dirname, '../src/scripts/Home_Rappel.js'),
    homemessages:Path.resolve(__dirname, '../src/scripts/Home_Messages.js'),
    activiteeopen:Path.resolve(__dirname, '../src/scripts/Activitee_Open.js'),
    club:Path.resolve(__dirname, '../src/scripts/Club.js'),
    generiquepage:Path.resolve(__dirname, '../src/scripts/Page_Generique.js'),
    trouverattitude:Path.resolve(__dirname, '../src/scripts/Page_TrouverAttitude.js'),
    pageeduc:Path.resolve(__dirname, '../src/scripts/Page_Educ.js'),
    pageformulaire:Path.resolve(__dirname, '../src/scripts/Page_Formulaire.js'),
    pagelightboxes:Path.resolve(__dirname, '../src/scripts/Page_Lightboxes.js'),
    login:Path.resolve(__dirname, '../src/scripts/Login.js')
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
   optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../src'), to: 'src' }
    ]),
    new HtmlWebpackPlugin({
      title: 'Home_Message',
      filename: 'Home_Message.html',
      template: Path.resolve(__dirname, '../src/Home_Message.html'),
      chunks: ['index','homemessages']
    }),
    new HtmlWebpackPlugin({
      title: 'Home_Rappel',
      filename: 'Home_Rappel.html',
      template: Path.resolve(__dirname, '../src/Home_Rappel.html'),     
      chunks:['index','homerappel']     
    }),
    new HtmlWebpackPlugin({
      title: 'Activitee_Open',
      filename: 'Activitee_Open.html',
      template: Path.resolve(__dirname, '../src/Activitee_Open.html'),     
      chunks:['index','activiteeopen']     
    }),
    new HtmlWebpackPlugin({
      title: 'Club',
      filename: 'Club.html',
      template: Path.resolve(__dirname, '../src/Club.html'),     
      chunks:['index','club']     
    }),
    new HtmlWebpackPlugin({
      title: 'Page_Generique',
      filename: 'Page_Generique.html',
      template: Path.resolve(__dirname, '../src/Page_Generique.html'),     
      chunks:['index','generiquepage']     
    }),
    new HtmlWebpackPlugin({
      title: 'Trouver_Attitude',
      filename: 'Trouver_Attitude.html',
      template: Path.resolve(__dirname, '../src/Trouver_Attitude.html'),     
      chunks:['index','trouverattitude']     
    }),
    new HtmlWebpackPlugin({
      title: 'Page_Educ',
      filename: 'Page_Educ.html',
      template: Path.resolve(__dirname, '../src/Page_Educ.html'),     
      chunks:['index','pageeduc']     
    }),
    new HtmlWebpackPlugin({
      title: 'Page_Formulaire',
      filename: 'Page_Formulaire.html',
      template: Path.resolve(__dirname, '../src/Page_Formulaire.html'),     
      chunks:['index','pageformulaire']     
    }),
    new HtmlWebpackPlugin({
      title: 'Page_Lightboxes',
      filename: 'LightBox_Page.html',
      template: Path.resolve(__dirname, '../src/LightBox_Page.html'),     
      chunks:['index','pagelightboxes']     
    }),
    new HtmlWebpackPlugin({
      title: 'Login',
      filename: 'Login.html',
      template: Path.resolve(__dirname, '../src/Login.html'),     
      chunks:['index','login']     
    })
   ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: Path.resolve(__dirname, '../src'),
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },   
    ]
  },  
};
