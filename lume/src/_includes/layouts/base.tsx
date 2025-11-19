export default (data: Lume.Data) => (
  <html lang="ja">
    <head>
      <meta charSet="utf-8" />
      <title>{data.Title}</title>
    </head>
    <body>
      <h1>{data.Title}</h1>
      <span>{data.ReleaseDate}</span>
      {data.Contents}
    </body>
  </html>
);
