# shopee-flashsale

> The unofficial utility for Shopee Thailand Flash Sale

## Installation

```cmd
pnpm add @ipiranhaa/shopee-flashsale
```

## API

Get Current Flash Sale Items

```typescript
import { getCurrentFlashSaleItems } from '@ipiranhaa/shopee-flashsale'

const items = await getCurrentFlashSaleItems()
```

Get Item Detail

```typescript
import { getItemDetail } from '@ipiranhaa/shopee-flashsale'

const item = await getItemDetail(147258369, 963852741)
```
