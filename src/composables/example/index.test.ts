import { useExample } from './index'
import { withSetup } from '@@/scripts/test-utils'

test('useExample', () => {
  const { count, increment } = useExample()
  expect(count.value).toBe(0)

  increment()
  expect(count.value).toBe(1)
})


test('useExample with setup', () => {
  const [{ count, increment }] = withSetup(() => useExample())
  expect(count.value).toBe(0)

  increment()
  expect(count.value).toBe(1)
})
