import { Catch,ExceptionFilter,HttpException,ArgumentsHost } from "@nestjs/common";
import { HttpArgumentsHost } from "@nestjs/common/interfaces";

@Catch()
export class HttpErrorFilter implements ExceptionFilter {

 

    catch(exception: HttpException, host:ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception.getStatus();

        const errorResponse ={
            code:status,
            timestamp:new Date().toISOString(),
            path:request.path,
            method:request.method,
            message:exception.message

        }

        response.status(status).json(errorResponse);
    }
}