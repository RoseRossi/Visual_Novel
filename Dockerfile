# --- React Builder ---

FROM node:19-alpine3.16 AS react-builder
WORKDIR /Visual_Novel
COPY ./Visual_Novel/package*.json ./
COPY ./Visual_Novel ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]