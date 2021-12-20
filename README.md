# back-end-brechoTech
## Rotas funcionais

**Rota de produtos** </br>
método: GET

https://back-end-brech-tech.herokuapp.com/product

</br>

**Rota de produtos por id** </br>
método: GET

https://back-end-brech-tech.herokuapp.com/product/find/id

</br>

**Rota de criar produto** </br>
método: POST
Precisa estar logado e o usuário logado precisa ser vendedor para ter acesso.

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

**Rota de delete**  </br>
método: DELETE

Precisa estar logado e o usuário logado precisa ser vendedor para ter acesso.

https://back-end-brech-tech.herokuapp.com/product/delete/id

