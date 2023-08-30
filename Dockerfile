FROM node:18.16.1


WORKDIR /app/src/apps

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./

COPY . .

RUN npm install --legacy-peer-deps



EXPOSE 8080

CMD [ "node", "dist/main.js" ]

  # docker run \
  #   --env TZ=UTC \
  #   --env POSTGRES_DB=postgres \
  #   --env POSTGRES_USER=postgres \
  #   --env POSTGRES_PASSWORD=Lochin2212 \
  #   --name postgres \
  #   --publish 5433:5432 \
  #   --restart unless-stopped \
  #   --volume postgres_data:/var/lib/postgresql/data \
  #   --detach postgres:alpine