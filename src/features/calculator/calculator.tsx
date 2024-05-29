import { Card, Checkbox, CheckboxProps, NumberInput, SimpleGrid, Stack } from '@mantine/core';
import {
  IconBuilding,
  IconBulb,
  IconDeviceTv,
  IconDevicesPc,
  IconFridge,
  IconFriends,
  IconHome,
  IconSun,
  IconToolsKitchen2,
  IconWindow
} from '@tabler/icons-react';

import { CounterInput, CardCheckboxList } from '@/components/ui';
import '@/components/ui/';

// potential flow
// add disclaimer about watts in lighting, it's ot 100% accurate
// add flow - 1: if they have an ideal hp in mind, if they dont have an hp in mind

export const Calculator = () => {
  return (
    <>
      <Card shadow="sm" padding="xl" withBorder radius="md">
        <Card.Section withBorder inheritPadding py="xl">
          <Stack>
            <SimpleGrid cols={2}>
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
            </SimpleGrid>
            <CounterInput
              label="Number of occupants"
              icon={<IconFriends style={{ width: '70%', height: '70%' }} />}
              min={2}
            />
            <CardCheckboxList
              onChange={list => console.log(list)}
              name="unitType"
              label="Type of unit"
              items={[
                { icon: <IconHome />, label: 'Residential', value: 'residential' },
                { icon: <IconBuilding />, label: 'Commercials', value: 'commercial' }
              ]}
            />
          </Stack>
        </Card.Section>
        <Card.Section inheritPadding py="xl" withBorder>
          <Stack>
            <Checkbox label="Is the room hit by direct sunlight?" size="md" icon={IconSun as CheckboxProps['icon']} />

            <CounterInput label="Number of windows" icon={<IconWindow style={{ width: '70%', height: '70%' }} />} />
            <CounterInput label="Number of bulbs" icon={<IconBulb style={{ width: '70%', height: '70%' }} />} />
            <CardCheckboxList
              allowMultiple
              onChange={list => console.log(list)}
              name="unitType"
              label="Items in the room"
              items={[
                { icon: <IconDevicesPc />, label: 'Computer', value: 'pc' },
                { icon: <IconDeviceTv />, label: 'LED TV', value: 'tv' },
                { icon: <IconFridge />, label: 'Refrigerator', value: 'fridge' },
                { icon: <IconToolsKitchen2 />, label: 'Working Kitchen', value: 'kitchen' }
              ]}
            />
          </Stack>
        </Card.Section>
      </Card>
    </>
  );
};
