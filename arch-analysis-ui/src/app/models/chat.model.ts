export interface ChatModel {
    role: string;
    content: string;
    model: string;
    prompt_tokens: number;
    completion_tokens: number;
}