# Nigerian States, LGAs, and Towns package

This project provides a dataset of all Nigerian states, Local Government Areas (LGAs), and towns/villages. It is designed for developers building applications requiring accurate information for Nigeria.

## Features

- ✅ Comprehensive lists of Nigerian states, LGAs, and towns.
- 🔧 Easy integration with NPM.
- 🤝 Open to community contributions to enhance and expand the dataset.


## Installation

### For the NPM Package

```bash
npm install nigerian-states-data
```

## Usage

### JavaScript/Node.js Example

```javascript
import { getStates, getLgas, getTowns } from 'nigerian-states-data'

// Get all states
console.log(getStates());

// Get LGAs of a specific state
console.log(getLgas('Lagos'));

// Get towns in a specific state
console.log(getTowns('Lagos'));
```


## Contributing

We’d love your contributions to make this dataset more accurate and complete!

### How to Contribute

1. **Star the Repository**  
   Show your support by ⭐️ starring the repository.

2. **Add Missing Data**  
   - Fork this repository.
   - Edit the `data/nigeria.json` file to include missing states, LGAs, or towns.

3. **Make a Pull Request**  
   - Ensure your pull request targets the `dev` branch.
   - Provide a clear description of your changes.


## Example Workflow for Contributions

```bash
# Fork the repository
git clone https://github.com/your-username/nigerian-states-data.git
cd nigerian-states-data

# Create a new branch for your changes
git checkout -b add-missing-data-town

# Make your edits to data/nigeria.json
# Commit and push your changes
git commit -m -s "Add missing LGAs for Kwara state"
git push origin add-missing-data

# Create a pull request to the dev branch
```

---

## Issues

Encounter a bug or need help? Open an issue in the repository, and we’ll respond as quickly as possible.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

If you find this project useful, don’t forget to **star the repository** ⭐️ and share it with others!
