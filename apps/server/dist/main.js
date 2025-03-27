"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bodyParser: true,
        rawBody: true,
    });
    app.enableCors({
        origin: [
            "https://cine-astas-server1.vercel.app/",
            "http://localhost:5173",
            "http://localhost:3000",
        ],
        methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
        credentials: true,
        allowedHeaders: "Content-Type, Authorization",
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix("api");
    const config = new swagger_1.DocumentBuilder()
        .setTitle("API Cine")
        .setDescription("api documentation")
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map