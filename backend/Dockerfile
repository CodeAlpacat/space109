FROM node:16

# 앱 디렉터리 생성
WORKDIR /var/jenkins_home/workspace/SPACE109/backend 

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./
# 타임존 설정
ENV TZ=Asia/Seoul

RUN npm install --save --legacy-peer-deps
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .

EXPOSE 3000
CMD [ "node", "./bin/www" ]
