import { Component, OnInit } from '@angular/core';
import { ChatModel } from '../models/chat.model';
import { GptService } from '../services/gpt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  query: string = "";

  history: ChatModel[] = [];

  constructor(private _gptService: GptService) { }

  ngOnInit(): void {
    // this.history.push({ role: "user", content: "Hello I am Abhijit", model: "", prompt_tokens: 0, completion_tokens: 0 });
    // this.history.push({ role: "assistant", content: "Hello Abhijit! welcome to the Open AI Demo. Here we are doing some architectural analysis of some architecture diagram. How can I help you today?", model: "gpt-4o-20140101", prompt_tokens: 35, completion_tokens: 65 });
    // this.history.push({ role: "user", content: "What kind of cloud service is used here?", model: "", prompt_tokens: 0, completion_tokens: 0 });
    // this.history.push({ role: "assistant", content: "The architecture diagram is based on AWS cloud services. All the cloud components are AWS based as you can see from the diagram.", model: "gpt-4o-20140101", prompt_tokens: 27, completion_tokens: 58 });
  }

  send() {
    if (this._gptService.getFile() != "") {
      this.history.push({ role: 'user', content: this.query, model: "", prompt_tokens: 0, completion_tokens: 0 });
      this._gptService.getResponse(this.query)
        .subscribe({
          next: (data) => {
            if (data != null) {
              this.history.push({ role: 'assistant', content: data.content, model: data.model, prompt_tokens: data.prompt_tokens, completion_tokens: data.completion_tokens });
            }
          },
          error: (error) => {

          },
          complete: () => { }
        });
      this.query = "";
    }
  }

}
