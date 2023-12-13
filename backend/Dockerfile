# --- React Builder ---

FROM node:19-alpine3.16 AS express-builder
WORKDIR /backend
COPY ./package*.json ./
COPY ./ ./
RUN npm install
EXPOSE 3700
CMD ["npm", "start"]