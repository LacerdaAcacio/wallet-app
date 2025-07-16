# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Implementar verificação de cartões duplicados.
- Adicionar animação de fade-in no background da `HomeScreen`.

### Fixed
- Corrigir sobreposição das mensagens de erro nos campos "Vencimento" e "CVV".
- Corrigir navegação do ícone `+` na `CardListScreen`.
- Limpar campos do formulário após o cadastro ser finalizado.

## [2.0.0] - 2025-07-16

### Added
- Arquitetura de software refatorada com foco em Clean Code, SOLID e responsabilidade única.
- Separação de componentes genéricos (`/components`) e de features (`/features`).
- Hooks customizados para isolar lógica de negócio e de UI.
- Testes unitários para todos os componentes e telas com Jest e RNTL.
- Configuração de ESLint, Prettier e path aliases (`@/`).
- Adicionado `CHANGELOG.md` e `README.md` detalhado.

### Changed
- Migração de `StyleSheet` para `Styled Components` com `ThemeProvider`.
- Componentes foram reescritos em TypeScript com tipagem forte.
- Gerenciamento de estado de servidor agora é feito com `React Query`.

## [1.0.5] - (Data anterior)

### Fixed
- Ajustado o dimensionamento dos componentes de `CardList` para melhor responsividade.

## [1.0.4] - (Data anterior)

### Fixed
- Corrigido o espaçamento entre os cartões empilhados na `CardList`.

## [1.0.3] - (Data anterior)

### Fixed
- Aprimorada a fluidez da animação de seleção de cartão.

## [1.0.2] - (Data anterior)

### Added
- Animação de foco ao selecionar um cartão da lista.
- Prop `isStackTop` para controle de estado do cartão no topo da pilha.

## [1.0.1] - (Data anterior)

### Fixed
- Corrigido o layout da `CardList` para impedir que os cartões sobreponham o header.
- Ajustado o distanciamento inicial dos cartões.
