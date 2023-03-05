import S3Storage from "../utils/S3Storage";

class getImagesService {
    async execute(filename: string): Promise<void> {
        const s3Storage = new S3Storage()
        await s3Storage.getFile(filename)
    }
}

export default getImagesService