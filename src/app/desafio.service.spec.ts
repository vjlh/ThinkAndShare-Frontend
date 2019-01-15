import { TestBed } from '@angular/core/testing';

import { DesafioService } from './desafio.service';

describe('DesafioService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DesafioService = TestBed.get(DesafioService);
        expect(service).toBeTruthy();
    });
});
