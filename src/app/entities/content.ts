export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    {
      const isContentLenghValid = this.validadeContentLength(content);

      if (!isContentLenghValid) {
        throw new Error('Content Lengh Error.');
      }
      this.content = content;
    }
  }
}
