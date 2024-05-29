import { Checkbox, Group, NumberInput, Radio, Stack } from '@mantine/core';

export const Calculator = () => {
  return (
    <Stack>
      <NumberInput
        label="Room height (sq.m)"
        placeholder="Enter room height"
        allowNegative={false}
        decimalScale={2}
        hideControls
        size="md"
      />
      <NumberInput
        label="Room width (sq.m)"
        placeholder="Enter room width"
        allowNegative={false}
        decimalScale={2}
        hideControls
        size="md"
      />
      <NumberInput
        label="Number of occupants"
        placeholder="Enter an average number of occupants"
        allowNegative={false}
        allowDecimal={false}
        size="md"
        min={2}
        max={99}
        defaultValue={2}
      />
      <Radio.Group size="md" name="unitType" label="Type of unit" withAsterisk>
        <Group mt="sm">
          <Radio size="md" value="residential" label="Residential" />
          <Radio size="md" value="commercial" label="Commercial" />
        </Group>
      </Radio.Group>
      <Checkbox label="Is the room directly hit by sunlight?" size="md" />
      <NumberInput
        label="Number of windows in the room"
        placeholder="Enter room height"
        allowNegative={false}
        min={0}
        max={99}
        size="md"
        defaultValue={1}
      />
    </Stack>
  );
};
