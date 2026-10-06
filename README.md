# SIGNALINK MVP-3C — Local Embedded Metadata Matrix

A browser simulation of an NFC tag carrying local context parameters.

## Objective
Allow a physical NFC tag to select a local SIGNALINK operating context without requiring a remote profile lookup.

## Example
`https://.../?env=icu_bed&mode=haptic`

The parser uses URLSearchParams to read the query values and applies a local configuration.

## Contexts
- `icu_bed` → urgent/tactile communication priority
- `retail_counter` → concise customer-facing communication
- unknown environment → safe default

## Engineering interpretation
The NFC tag is the access/context layer. The browser prototype proves the metadata parsing and local configuration decision. It does not implement NFC hardware yet.

Future hardware path:
NFC tag → phone reader → SIGNALINK launch URL → local context parser → communication pipeline.

Theory → Build → Measure → Explain → Hardware
