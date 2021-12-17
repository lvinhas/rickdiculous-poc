FROM node:lts-alpine AS runtime
ARG target
WORKDIR /app
COPY packages/${target}/package*.json .
# RUN npm ci --only=production
RUN npm i
COPY  packages/${target} .
EXPOSE 3000
CMD ["npm", "start"]