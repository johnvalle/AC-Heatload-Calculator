import { Group, Radio, SimpleGrid, Text } from '@mantine/core';
import { ReactNode, useEffect, useState } from 'react';

type CheckBoxListItem = {
  icon: ReactNode;
  label: string;
  value: string;
};

type Props = {
  items: CheckBoxListItem[];
  label: string;
  name: string;
  defaultValue?: string;
  allowMultiple?: boolean;
  cols?: number;
  onChange?: (list: string[]) => void;
};

export const CardCheckboxList = ({
  items,
  defaultValue,
  name,
  label,
  onChange,
  allowMultiple = false,
  cols = 2
}: Props) => {
  const [selectedList, setSelectedList] = useState<string[]>(defaultValue ? [defaultValue] : []);

  const isSelected = (value: string): boolean => selectedList.includes(value);
  const handleClick = (value: string): void => {
    if (isSelected(value)) {
      setSelectedList(prevState => prevState.filter(selectedItem => selectedItem !== value));
    } else {
      if (allowMultiple) {
        setSelectedList(prevState => [...prevState, value]);
      } else {
        setSelectedList([value]);
      }
    }
  };

  useEffect(() => {
    !!onChange && onChange(selectedList);
  }, [onChange, selectedList]);

  return (
    <Radio.Group size="md" withAsterisk name={name} label={label}>
      <SimpleGrid cols={cols} mt="sm">
        {items.map(({ icon, label, value }, idx) => (
          <Radio.Card
            key={`${idx}-${value}`}
            radius="md"
            p="md"
            bg={isSelected(value) ? 'blue' : 'white'}
            c={isSelected(value) ? 'white' : 'dark'}
            onClick={() => handleClick(value)}>
            <Group>
              {icon}
              <Text>{label}</Text>
            </Group>
          </Radio.Card>
        ))}
      </SimpleGrid>
    </Radio.Group>
  );
};
