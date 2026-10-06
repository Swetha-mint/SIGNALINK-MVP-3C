# SIGNALINK MVP-3C — Local Embedded Metadata Matrix

A browser simulation of an NFC tag carrying local context parameters.

## Objective

Allow a physical NFC tag to select a local SIGNALINK operating context without requiring a remote profile lookup.

## Example

`https://swetha-mint.github.io/SIGNALINK-MVP-1/?env=icu_bed&mode=haptic`

The parser uses `URLSearchParams` to read the query values and applies a local configuration.

## Simulator flow

1. Enter or edit an NFC-style URL.
2. Select **PARSE CONTEXT** to extract the local context parameters.
3. Select **OPEN URL** to launch the entered HTTP/HTTPS URL in a new browser tab.
4. The opened SIGNALINK application can then receive the same query parameters.

The **OPEN URL** action is a navigation simulation of what the phone would do after reading a URL from a physical NFC tag.

## Contexts

- `icu_bed` → urgent/tactile communication priority
- `retail_counter` → concise customer-facing communication
- unknown environment → safe default

## Engineering interpretation

The NFC tag is the access/context layer. The browser prototype proves the metadata parsing, local configuration decision, and URL-launch flow before physical NFC hardware exists.

The simulator does not implement NFC hardware yet.

## Future hardware path

NFC tag → phone reader → SIGNALINK launch URL → local context parser → communication pipeline.

## Engineering record

This MVP is a **pre-hardware NFC software validation**. It demonstrates the behavior that will later be triggered by tapping a physical NFC tag.

Theory → Build → Measure → Explain → Hardware
