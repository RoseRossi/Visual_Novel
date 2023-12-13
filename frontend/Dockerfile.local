# --- React Builder ---

FROM node:19-alpine3.16 AS react-builder
WORKDIR /frontend
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY ./ ./
RUN npm run build

# --- Apache ---
# --- Apache ---
FROM httpd:latest
COPY --from=react-builder /frontend/build/ /usr/local/apache2/htdocs/
RUN sed -i 's/80/3000/g' /usr/local/apache2/conf/httpd.conf
EXPOSE 3000