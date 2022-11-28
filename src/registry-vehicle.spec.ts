import { RegistryVehicle } from "./registry-vehicle";

describe('@RegistryVehicle',()=>{
    it('Should return status code 400 when name does not exist',()=>{
        const sut = new RegistryVehicle();
        const httpRequest = {
            body: {
                name: 'Toyota',
                model: 'Yaris',
                year: 2022
            }
        }

        const httpResponse = sut.handle(httpRequest)
        
        expect(httpResponse.statusCode).toBe(400)
    })
 /*   const req = {name = 'pepito', lastname = 'mocha'}
    describe('Initialization variables',()=>{
        it('Deberia recibir como resultado el nombre de pepito'),()=>{
            const req = {name: 'pepito', lastname : 'mocha'};
    
            const resultado = new RegistryVehicle(req).getName();
            
            expect(resultado).toBe('pepito')
        }
    })
    describe('Callback APIs',()=>{
        it('Deberia recibir como resultado el nombre de pepito'),()=>{
            const req = {name: 'pepito', lastname : 'mocha'};
    
            const resultado = new RegistryVehicle(req).getName();
            
            expect(resultado).toBe('pepito')
        }
    })
    describe('Callback Error APIs',()=>{
        it('Deberia recibir como resultado el nombre de pepito'),()=>{
            const req = {name: 'pepito', lastname : 'mocha'};
    
            const resultado = new RegistryVehicle(req).getName();
            
            expect(resultado).toBe('pepito')
        }
    })*/
});