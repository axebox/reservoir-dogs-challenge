const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")

module.exports = {
  "mode": "development",
  "entry": "./src/app.js",
  "output": {
    "path": __dirname + '/public/dist',
    "filename": "[name].js"
  },
  "devtool": "source-map",
  "module": {
    "rules": [
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "env"
            ]
          }
        }
      },
      {
        "test": /\.scss$/,
        "use": [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Open Sans", variants: ["regular", "400", "600", "800"] }
      ],
      path: undefined
    })
  ]
}
