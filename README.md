# caesar-cipher-cli
CLI tool should accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

`Action` (**encode**/**decode**) and the `shift` are required

### Installation ###

1. Open cmd or other terminal
2. git clone https://github.com/DimaKukhta/caesar-cipher-cli.git
3. cd caesar-cipher-cli
4. git checkout develop
5. npm install
6. npm install -g .
### Now you can use cli tool, several commands: ###

1. caesar-crypt -a encode -s 7 -i "./input.txt" -o "./output.txt"
2. caesar-crypt --action encode --shift 57 --input "./input.txt" --output "./output.txt"
3. caesar-crypt -a decode -s 7 -i "./input.txt" -o "./output.txt"
4. caesar-crypt -a encode -s -7 -i "./input.txt"
5. caesar-crypt -a encode -s 7
6. caesar-crypt -a decode -s 7 -o "./output.txt"
7. caesar-crypt -a encode -s 3

### If you have some problem with installation or with npm, you can use follow commands: ###

1. node ./bin/index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
2. node ./bin/index.js --action encode --shift 57 --input "./input.txt" --output "./output.txt"
3. node ./bin/index.js -a decode -s 7 -i "./input.txt" -o "./output.txt"
4. node ./bin/index.js -a encode -s -7 -i "./input.txt"
5. node ./bin/index.js -a encode -s 7
6. node ./bin/index.js -a decode -s 7 -o "./output.txt"
7. node ./bin/index.js -a encode -s 3

