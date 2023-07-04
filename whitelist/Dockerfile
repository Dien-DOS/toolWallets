FROM node:16-alpine
WORKDIR /app
COPY ./config/ ./config/
COPY ./model/ ./model/
COPY ./service/ ./service/
COPY ./utils/ ./utils/
COPY ./main.js ./
COPY ./package*.json ./
COPY ./postinstall.js ./
RUN npm install --only=production
EXPOSE 8998
CMD ["npm", "run", "start"]