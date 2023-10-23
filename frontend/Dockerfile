# --- React Builder ---

FROM node:19-alpine3.16 AS react-builder
WORKDIR /frontend
COPY ./package*.json ./
COPY ./ ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]