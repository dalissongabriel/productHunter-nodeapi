# NODE Products API

## 🤔 O que é
Uma API Restful simples, utilizando as tecnologias: Mongo, Node e express.

## 🧐 Como instalar
<p>Primeiro, clone a aplicação:</p>
<pre><code>git clone git@github.com:dalissongabriel/productNodeMongoAPI.git api
cd api
npm install
</code></pre>
<p>Depois, prepare o banco de dados em docker:
<pre><code>docker pull mongo
docker run --name mongo -p 1234:27017 -d mongo</code></pre>
<p>Por fim, inicie a aplicação:</p>
<pre><code>npm run dev</code></pre>

## 👀 Como usar

<p>Abaixo estão alguns exemplos em <strong>curl</strong> para utilizar a API</p>
<p><strong>Criar um novo produto</strong></p>
<pre><code>curl --location --request POST 'http://localhost:3000/products' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"Novo título do produto",
    "description":"Nova descrição do produto",
    "url":"http://minhaurl.com.br/meuproduto"
}'</code></pre>
<p><strong>Mostrando detalhes de um produto</strong></p>
<pre><code>curl --request GET \
  --url http://localhost:3000/products/5f561bb38d1a5f2c3f9aca58</code></pre>
<p><strong>Atualizando um produto</strong></p>
<pre><code>curl --request PUT \
  --url http://localhost:3000/products/5f561bb38d1a5f2c3f9aca58 \
  --header 'content-type: application/json' \
  --data '{
	"title": "React Native - JS"
}'</code></pre>
<p><strong>Apagando um produto</strong></p>
<pre><code>curl --request DELETE \
  --url http://localhost:3000/products/5f561a878d1a5f2c3f9aca57</code></pre>
 <p><strong>Listando (por páginas) os produtos</strong></p>
 <pre><code>curl --request GET \
  --url 'http://localhost:3000/products?page=3'</code></pre>

😊
