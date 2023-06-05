# shopee-flashsale

> The unofficial utility for Shopee Thailand Flash Sale

## Installation

```cmd
pnpm add shopee-flashsale
```

## API

Get Current Flash Sale Items

```typescript
import { getCurrentFlashSaleItems } from 'shopee-flashsale'

const items = await getCurrentFlashSaleItems()
```

Get Item Detail

```typescript
import { getItemDetail } from 'shopee-flashsale'

const item = await getItemDetail(147258369, 963852741)
```
