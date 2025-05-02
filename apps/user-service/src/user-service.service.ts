import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServiceService {
  private users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
  ];

  findById(id: number) {
    return this.users.find((user) => user.id == id);
  }
}
