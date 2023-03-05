import aws, {S3} from 'aws-sdk'
import path from 'path';
import multerConfig from '../config/multer'
import mime from 'mime';
import fs from 'fs'

class S3Storage {
    private client: S3;

    constructor() {
        this.client = new aws.S3({
            region: 'us-east-1',
        })
    }

    async saveFile(filename: string): Promise<void> {
        const originalPath = path.resolve(multerConfig.directory, filename)

        const contentType = mime.getType(originalPath)

        if(!contentType) {
            throw new Error('file not found')
        }

        const fileContent = await fs.promises.readFile(originalPath)

        this.client.putObject({
            Bucket: 'teste-startpn',
            Key: filename,
            Body: fileContent,
            ContentType: contentType,
        })
        .promise()

        await fs.promises.unlink(originalPath)
    }

    async deleteFile(filename: string): Promise<void> {
        await this.client.deleteObject({
            Bucket: 'teste-startpn',
            Key: filename
        })
        .promise()
    }

    async getFile(fileName: string): Promise<void> {
        await this.client.getObject({
            Bucket: 'teste-startpn',
            Key: fileName
        })
        .promise()
    }

    
 }

export default S3Storage