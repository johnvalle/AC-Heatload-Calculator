import { Container, Grid } from '@mantine/core';

import { BaseLayout } from '@/components/layouts/BaseLayout';
import { Calculator } from '@/features';

export const Home = () => {
  return (
    <BaseLayout>
      <Container size="xl">
        <Grid>
          <Grid.Col span={4}>
            <Calculator />
          </Grid.Col>
          <Grid.Col span={8}>
            <p>Result</p>
          </Grid.Col>
        </Grid>
      </Container>
    </BaseLayout>
  );
};
