# back-end-brechoTech
## Rotas funcionais
</br>

### Rotas de product
**Rota de produtos** </br>
método: GET
https://back-end-brech-tech.herokuapp.com/product

</br>

**Rota de produtos por id** </br>
método: GET</br>
https://back-end-brech-tech.herokuapp.com/product/find/id

</br>

**Rota de criar produto** </br>
método: POST</br>
Precisa estar logado e o usuário logado precisa ser vendedor para ter acesso.
</br>
body da requisição:   </br>

  typeHard: string; </br>
  modelHard: string; </br>
  priceHard: string; </br>
  yearuseHard: number; </br>
  productPhotosHard: string; </br>
  videoHard: string; </br>
  usedHard: string; </br>


https://back-end-brech-tech.herokuapp.com/product/create

</br>

**Rota de atualizar o produto** </br>
método: PUT
Precisa estar logado e o usuário logado precisa ser vendedor para ter acesso.

body da requisição:   </br>

  typeHard: string; </br>
  modelHard: string; </br>
  priceHard: string; </br>
  yearuseHard: number; </br>
  productPhotosHard: string; </br>
  videoHard: string; </br>
  usedHard: string; </br>


https://back-end-brech-tech.herokuapp.com/product/update/id

</br>
</br>

**Rota de delete**  </br>
método: DELETE

Precisa estar logado e o usuário logado precisa ser vendedor para ter acesso.

https://back-end-brech-tech.herokuapp.com/product/delete/id


</br>
</br>

**Rotas de Login** </br>

Método: POST </br>
body da requisição:  </br> 

  email: string; </br>
  password: string; </br>

https://back-end-brech-tech.herokuapp.com/auth/login


</br></br>

**Rota de perfil** </br> 
Método: GET  

body da requisição: </br>
  id: number;</br>
  role: string;</br>



https://back-end-brech-tech.herokuapp.com/auth/profile


</br>

**Rotas de vendedor** 

Cria vendedor </br>
Método: POST</br>

body da requisição: </br>
  name: string;</br>
  email: string;</br>
  password: string;</br>
  passwordConfirmation: string;</br>
  cpf: string;</br>
  region: string;</br>
  reputation: string;</br>


https://back-end-brech-tech.herokuapp.com/vendedor/register

</br>

pega vendedor por id</br>
método: GET</br>
Precisa estar logado e o usuário logado precisa ser vendedor para ter acesso</br>

https://back-end-brech-tech.herokuapp.com/vendedor/find/id

</br>


Lista todos os vendedores</br>
método: GET</br>
Precisa estar logado e o usuário logado precisa ser vendedor para ter acesso</br>


https://back-end-brech-tech.herokuapp.com/vendedor/find-all

</br>

Apaga vendedor por id</br>
método: DELETE</br>
Precisa estar logado e o usuário logado precisa ser vendedor para ter acesso</br>

https://back-end-brech-tech.herokuapp.com/vendedor/delete/id



</br></br>




**Rotas de usuário** 



Lista usuário por id </br>
método: GET</br>
Precisa estar logado</br>

https://back-end-brech-tech.herokuapp.com/users/id

</br>


Cria usuário </br>
metodo: POST</br>

Body da requisição: </br>
</br>
  nome: string;</br>
  email: string;</br>
  regiao: string;</br>
  cpf: string;</br>
  password: string;</br>
  passwordconfirmation: string;</br>

https://back-end-brech-tech.herokuapp.com/users/create


</br>

**Atualiza usuário** 
método: PATCH </br>

precisa estar logado</br>

body da requisição</br>

  nome: string;</br>
  email: string;</br>
  regiao: string;</br>
  cpf: string;</br>
  password: string;</br>
  passwordconfirmation: string;</br>

https://back-end-brech-tech.herokuapp.com/users/updateUser/id




</br>


Deleta usuário por id </br>
método: DELETE</br>

https://back-end-brech-tech.herokuapp.com/users/delete/id

</br>


Adiciona produto ao carrinho, o id é o do produto </br>
método: GET</br>
precisa estar logado como usuário</br>

https://back-end-brech-tech.herokuapp.com/users/cart/id




