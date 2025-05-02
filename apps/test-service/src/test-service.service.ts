import { Injectable } from '@nestjs/common';

@Injectable()
export class TestServiceService {
  private tests = [
    { id: '123', data: 'test' },
    { id: '456', data: 'test2' },
    { id: '789', data: 'test3' },
  ];

  findAll() {
    return this.tests;
  }
}
