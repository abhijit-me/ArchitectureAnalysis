export interface ResponseModel {
    content: string;
    model: string;
    prompt_tokens: number;
    completion_tokens: number;
}