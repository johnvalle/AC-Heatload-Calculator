import { ActionIcon, Avatar, Card, Group, Text } from '@mantine/core';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { ReactNode, useState } from 'react';

type Props = {
  min?: number;
  max?: number;
  label?: string;
  icon?: ReactNode;
};

export const CounterInput = ({ label, icon, max = 99, min = 0 }: Props) => {
  const [count, setCount] = useState(min);
  return (
    <Card withBorder>
      <Group justify="space-between">
        <Group>
          <ActionIcon variant="light" radius="xl" size="lg">
            {icon}
          </ActionIcon>
          <Text>{label}</Text>
        </Group>
        <Group>
          <Avatar color={count === 0 ? 'dark' : 'blue'}>{String(count)}</Avatar>
          <ActionIcon.Group>
            <ActionIcon
              variant="default"
              disabled={count - 1 < min}
              onClick={() => setCount(prevState => (prevState -= 1))}>
              <IconMinus />
            </ActionIcon>
            <ActionIcon
              variant="default"
              disabled={count + 1 > max}
              onClick={() => setCount(prevState => (prevState += 1))}>
              <IconPlus />
            </ActionIcon>
          </ActionIcon.Group>
        </Group>
      </Group>
    </Card>
  );
};
