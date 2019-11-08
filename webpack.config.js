module.exports = {
    // エントリーポイントエントリー(バンドルを行う際にモジュールの解析を開始する場所)
    entry: "./js/index.js",
    output: {
        // バンドル後のファイル名を記述
        filename: "main.js",
        // バンドル先のファイルパスを記述
        //__dirnameには、現在実行中のソースコード(webpack.config.js)が格納されているディレクトリの絶対パスが格納されている。outputパスには絶対パスを指定しなければならないため、以下のように記述しよう。
        path: __dirname + "/dist"
    }
}