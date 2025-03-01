# **vvk**

A command-line interface tool that converts natural language instructions into shell commands using OpenAI's GPT-3.5-Turbo.

## **Prerequisites**

Before using this tool, you need to configure your API key and preferences.
Get an OpenAI API key at https://platform.openai.com/api-keys
Alternatively, sign up for VVK Cloud at https://vvk.ai/

### **Setup Configuration**

Use the `vvk config set` command to configure your settings:

```bash
# Set your OpenAI API key
vvk config set openaiApiKey your_api_key_here

# Enable or disable command confirmation (default: true)
vvk config set confirmCommand true

# Set default confirmation behavior (y/n)
vvk config set defaultConfirmation y
```

You can check your current settings with:

```bash
vvk config list
```

## **Usage**

Run commands using natural language:

```bash
vvk <your natural language command>
```

### **Examples**

```bash
# List all files in the current directory
vvk show me all files in this folder

# Find large files
vvk find files larger than 100MB

# Search for text in files
vvk search for "hello world" in all javascript files
```

The tool will:

1. Process your natural language input
2. Generate an appropriate shell command
3. Show you the command for confirmation (if enabled)
4. Execute the command upon your approval

## **Development**

To set up the development environment:

```bash
# Clone the repository
git clone https://github.com/matyik/vvk.git

# Install dependencies
pnpm install

# Build the project
pnpm build

# Create a global link
pnpm link --global

# Now you can use the development version globally
vvk <command>
```

## **License**

MIT License - see LICENSE file for details

## **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.
