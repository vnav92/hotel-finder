import React, { useState, useEffect } from 'react';
import {
  Box,
  NumberInput as ChakraNumberInput,
  NumberInputField as ChakraNumberInputField,
  Button,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import styles from './number-input.module.scss';

type NumberInputProps = {
  id: string;
  'aria-label': string;
  onValueChange: (value: number) => void;
};

export const NumberInput: React.FC<NumberInputProps> = ({
  id,
  onValueChange,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    onValueChange(currentValue);
  }, [currentValue, onValueChange]);

  return (
    <Box className={styles.numberInputWrapper}>
      <Button
        isDisabled={currentValue === 0}
        onClick={() => setCurrentValue((value) => value - 1)}
        className={styles.valueChangeButton}
        aria-label="Subtract one from value"
        background="transparent"
      >
        <MinusIcon />
      </Button>
      <ChakraNumberInput isReadOnly={true} value={currentValue}>
        <ChakraNumberInputField
          id={id}
          className={styles.numberInputField}
          aria-label={props['aria-label']}
        />
      </ChakraNumberInput>
      <Button
        onClick={() => setCurrentValue((value) => value + 1)}
        className={styles.valueChangeButton}
        aria-label="Add one to value"
        background="transparent"
      >
        <AddIcon />
      </Button>
    </Box>
  );
};
