# DO- Product- card

Este es un paquete de pruebas de despliegue en NPM


### Dave Mg


## Ejemplo


```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'dm-product-card

```

```
        <ProductCard
            product={ product }
            initialValues={{ quantity: 4, maxQuantity: 10 }}
        >
            {
              ( {
                  reset, 
                  count, 
                  increaseBy, 
                  isMaxQuantityReached, 
                  maxQuantity 
                }) => (
                <>
                  <ProductImage/>
                  <ProductTitle/>
                  <ProductButtons />
                </>
              )
            }

        </ProductCard>


```