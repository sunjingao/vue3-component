const path = require('path');

const webpack = require('webpack');

// Vue Loader 的插件
const { VueLoaderPlugin } = require('vue-loader/dist/index');

// 创建 html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 提取css到文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 压缩css文件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// js压缩
const TerserWebpackPlugin = require('terser-webpack-plugin');

const { WebpackOpenBrowser } = require('webpack-open-browser');

// 代码校验工具
const ESLintPlugin = require('eslint-webpack-plugin');

// 样式校验
const StylelintPlugin = require('stylelint-webpack-plugin');

// 清空文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 压缩后的资源自动打包成zip包
const FileManagerWebpackPlugin = require('filemanager-webpack-plugin');

// 合并配置文件
const { merge } = require('webpack-merge');

// 输出日志
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// 耗时显示
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
// 查看打包情况
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


// 查看打包情况
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 配置文件
const CONFIG_VARIABLES = {

  common: {},

  // 开发环境 配置文件
  development: {
    // 启动ip
    visitIp: 'localhost',
    // 启动端口
    visitPort: "8888",
    // url前缀
    publicPath: "/docs/ui"
  },

  // 当前目录下打包环境 配置文件
  build: {
    // 打包目录
    outputPath: "./",
    // 输出目录名称
    outputFolderName: "dist",
    // url前缀
    // publicPath: "/docs/ui",
    // dist压缩包名称
    zipName: "vue3组件库浏览文档"
  },
};

const commonConfig = {

  // 入口
  entry: {
    index: "./index.js",
  },

  resolve: {

    // 引用时可忽略的后缀
    extensions: ['.vue', '.js', '.scss', '.css', 'json'],

    // 别名，引用时直接可以通过别名引用
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader',
      },
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|gif|jpe?g)(\?\S*)?$/i,
        type: 'asset',
        exclude: /node_modules\/(?!element-plus).*/,
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb，才转base64
          }
        },
        generator: {
          filename: 'images/[name].[contenthash:8][ext]'
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        type: 'asset',
        exclude: /node_modules\/(?!element-plus).*/,
        generator: {
          filename: 'fonts/[name].[contenthash:8][ext]'
        }
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './mdConfig/index.js')
          }
        ]
      }
    ]
  },

  plugins: [

    // // 1、将引用暴露到全局变量中
    // // 2、先找 .resolve.alias 中的属性，若没找到会找 node_modules 下的文件，直到找到为止
    // new webpack.ProvidePlugin({
    //   Popper: ['Popper', 'default']
    // }),

    new ESLintPlugin({
      extensions: ['js', 'json', 'vue'],
      exclude: './node_modules',
      fix: true
    }),

    new StylelintPlugin({
      files: ['src/**/*.{css,scss}'],
      fix: true,
      cache: true,
      failOnError: true
    }),

    // 定义全局变量，一般是定义字符串变量
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),

    // Vue Loader 的插件
    new VueLoaderPlugin(),

    // 创建html文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/index.html',
      inject: true,
      minify: true,
      title: 'vue3组件库'
    }),
  ]
};

const developmentConfig = {

  // 模式，使用webpack4的优化功能
  mode: 'development',

  devtool: 'eval-source-map',

  optimization: {
    runtimeChunk: 'single'
  },


  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'postcss-loader', // 添加前缀
          'sass-loader' // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      }
    ]
  },

  plugins: [

    // 定义全局变量，一般是定义字符串变量
    new webpack.DefinePlugin({}),

    // open http://localhost:3000 in default browser
    new WebpackOpenBrowser({
      url: `http://${CONFIG_VARIABLES.development.visitIp}:${CONFIG_VARIABLES.development.visitPort}${CONFIG_VARIABLES.development.publicPath}/index.html`
    }),

    // 查看打包情况
    // new BundleAnalyzerPlugin(),
  ],

  output: {

    // 发布后，资源的引用目录
    publicPath: CONFIG_VARIABLES.development.publicPath,

    // 文件名称
    filename: "js/[name].js",

    // 按需加载模块时输出的文件名称
    chunkFilename: "js/[name].js"
  },

  devServer: {
    hot: true,

    // 端口
    port: CONFIG_VARIABLES.development.visitPort,
  }
};

const buildConfig = {

  // 模式，使用webpack4的优化功能
  mode: 'production',

  devtool: 'source-map',

  optimization: {

    runtimeChunk: 'single',

    minimize: true,

    minimizer: [
      new TerserWebpackPlugin({
        test: /\.js$/i,
        exclude: /node_modules/
      }),
      new CssMinimizerPlugin({
        test: /\.css$/i,
        exclude: /node_modules/
      })
    ]

    // 待提取
  },

  module: {
    rules: [
      // vue-loader @15.?之后，css要单独处理
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'postcss-loader',
          'sass-loader' // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
    ]
  },

  plugins: [

    // 全局变量
    // new webpack.DefinePlugin({}),
    // 清空文件夹
    new CleanWebpackPlugin(),
    // 提取css到文件
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: 'css/[name]-[chunkhash:8].css',
      chunkFilename: 'css/[name]-[chunkhash:8].css'
    }),

    new FileManagerWebpackPlugin({
      events: {
        onEnd: {
          archive: [
            {
              source: CONFIG_VARIABLES.build.outputPath,
              destination: CONFIG_VARIABLES.build.outputPath + '/' + CONFIG_VARIABLES.build.zipName + '.zip'
            }
          ]
        }
      }
    }),

    new ProgressBarPlugin({
      format: '[:bar] ' + ' |. ' + 'percent::percent' + ' | ' + 'elapsed::elapsed seconds',
      clear: false
    }),
    new SpeedMeasurePlugin(),
    new BundleAnalyzerPlugin()
  ],

  output: {

    // 输出目录
    path: path.resolve(CONFIG_VARIABLES.build.outputPath, CONFIG_VARIABLES.build.outputFolderName),

    // 文件名称
    filename: "js/[name]-[chunkhash:8].js",

    // 按需加载模块时输出的文件名称
    chunkFilename: "js/[name]-[chunkhash:8].js",

    // html中注入的入口资源前缀
    publicPath: './'
  }
};

module.exports = () => {

  let selfConfig = null, scriptEnv = process.env.SCRIPT_ENV;

  switch (scriptEnv) {
    case 'development':
      selfConfig = developmentConfig;
      break;
    case 'build':
      selfConfig = buildConfig;
      break;
    default:
      throw new Error('package.json scripts env setting is error');
  }

  return merge(commonConfig, selfConfig);
};


