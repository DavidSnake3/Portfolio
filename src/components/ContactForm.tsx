// Versión con más opciones de contacto
"use client";

import { Heading, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";

export const ContactForm: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{ x: 50, y: 0, radius: 100, cursor: false }}
        gradient={{
          display: true,
          opacity: 90 as opacity,
          x: 50, y: 0, width: 50, height: 50, tilt: 0,
          colorStart: "accent-background-strong",
          colorEnd: "static-transparent",
        }}
        dots={{
          display: true, 
          opacity: 20 as opacity, 
          size: "2" as SpacingToken,
          color: "brand-on-background-weak",
        }}
      />
      
      <Column maxWidth="s" horizontal="center" align="center" gap="l">
        <Heading variant="display-strong-xs" align="center">
          
Hello!
        </Heading>
        
        <Text 
          wrap="balance" 
          variant="body-default-l" 
          onBackground="neutral-weak"
          align="center"
        >
          I appreciate you taking the time to explore my portfolio and learn about my work as a software engineer.
        </Text>
        </Column>
      </Column>

  );
};