import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":5,"end":10}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"user","loc":{"start":15,"end":19}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":20,"end":22}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":24,"end":26}},"loc":{"start":24,"end":26}},"loc":{"start":24,"end":27}},"directives":[],"loc":{"start":20,"end":27}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":30,"end":34}},"loc":{"start":30,"end":34}},"directives":[],"loc":{"start":15,"end":34}}],"loc":{"start":0,"end":36}},{"kind":"InterfaceTypeDefinition","name":{"kind":"Name","value":"User","loc":{"start":48,"end":52}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":57,"end":59}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":61,"end":63}},"loc":{"start":61,"end":63}},"loc":{"start":61,"end":64}},"directives":[],"loc":{"start":57,"end":64}}],"loc":{"start":38,"end":66}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"AdminUser","loc":{"start":73,"end":82}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":94,"end":98}},"loc":{"start":94,"end":98}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":103,"end":105}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":107,"end":109}},"loc":{"start":107,"end":109}},"loc":{"start":107,"end":110}},"directives":[],"loc":{"start":103,"end":110}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"adminName","loc":{"start":113,"end":122}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":124,"end":130}},"loc":{"start":124,"end":130}},"loc":{"start":124,"end":131}},"directives":[],"loc":{"start":113,"end":131}}],"loc":{"start":68,"end":133}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"CustomerUser","loc":{"start":140,"end":152}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":164,"end":168}},"loc":{"start":164,"end":168}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":173,"end":175}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":177,"end":179}},"loc":{"start":177,"end":179}},"loc":{"start":177,"end":180}},"directives":[],"loc":{"start":173,"end":180}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"customerName","loc":{"start":183,"end":195}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":197,"end":203}},"loc":{"start":197,"end":203}},"loc":{"start":197,"end":204}},"directives":[],"loc":{"start":183,"end":204}}],"loc":{"start":135,"end":206}}],"loc":{"start":0,"end":207}} as unknown as DocumentNode