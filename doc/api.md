## Classes
<dl>
<dt><a href="#Archive">Archive</a></dt>
<dd></dd>
<dt><a href="#ManagedEntry">ManagedEntry</a></dt>
<dd></dd>
<dt><a href="#ManagedGroup">ManagedGroup</a></dt>
<dd></dd>
<dt><a href="#Westley">Westley</a></dt>
<dd></dd>
<dt><a href="#PasswordGenerator">PasswordGenerator</a></dt>
<dd></dd>
</dl>
## Typedefs
<dl>
<dt><a href="#CharacterSet">CharacterSet</a> : <code>Object</code></dt>
<dd><p>Password generator character set</p>
</dd>
</dl>
<a name="Archive"></a>
## Archive
**Kind**: global class  

* [Archive](#Archive)
  * [new Archive()](#new_Archive_new)
  * [.createGroup([title])](#Archive+createGroup) ⇒ <code>[ManagedGroup](#ManagedGroup)</code>
  * [.getGroups()](#Archive+getGroups) ⇒ <code>Array.&lt;ManagedGroups&gt;</code>
  * [._getWestley()](#Archive+_getWestley) ⇒ <code>[Westley](#Westley)</code>

<a name="new_Archive_new"></a>
### new Archive()
The base Buttercup Archive class

<a name="Archive+createGroup"></a>
### archive.createGroup([title]) ⇒ <code>[ManagedGroup](#ManagedGroup)</code>
Create a new group

**Kind**: instance method of <code>[Archive](#Archive)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [title] | <code>String</code> | The title for the group |

<a name="Archive+getGroups"></a>
### archive.getGroups() ⇒ <code>Array.&lt;ManagedGroups&gt;</code>
Get all groups (root) in the archive

**Kind**: instance method of <code>[Archive](#Archive)</code>  
**Returns**: <code>Array.&lt;ManagedGroups&gt;</code> - An array of ManagedGroups  
<a name="Archive+_getWestley"></a>
### archive._getWestley() ⇒ <code>[Westley](#Westley)</code>
Get the underlying Westley instance

**Kind**: instance method of <code>[Archive](#Archive)</code>  
**Access:** protected  
<a name="ManagedEntry"></a>
## ManagedEntry
**Kind**: global class  

* [ManagedEntry](#ManagedEntry)
  * [new ManagedEntry(westley, remoteObj)](#new_ManagedEntry_new)
  * [.toObject()](#ManagedEntry+toObject) ⇒ <code>Object</code>

<a name="new_ManagedEntry_new"></a>
### new ManagedEntry(westley, remoteObj)
Managed entry class


| Param | Type | Description |
| --- | --- | --- |
| westley | <code>[Westley](#Westley)</code> | The Westley instance |
| remoteObj | <code>Object</code> | The remote object reference |

<a name="ManagedEntry+toObject"></a>
### managedEntry.toObject() ⇒ <code>Object</code>
Export entry to object

**Kind**: instance method of <code>[ManagedEntry](#ManagedEntry)</code>  
<a name="ManagedGroup"></a>
## ManagedGroup
**Kind**: global class  

* [ManagedGroup](#ManagedGroup)
  * [new ManagedGroup(westley, remoteObj)](#new_ManagedGroup_new)
  * [.toObject()](#ManagedGroup+toObject) ⇒ <code>Object</code>

<a name="new_ManagedGroup_new"></a>
### new ManagedGroup(westley, remoteObj)
Managed group class


| Param | Type | Description |
| --- | --- | --- |
| westley | <code>[Westley](#Westley)</code> | The Westley instance |
| remoteObj | <code>Object</code> | The remote object reference |

<a name="ManagedGroup+toObject"></a>
### managedGroup.toObject() ⇒ <code>Object</code>
Export group to object

**Kind**: instance method of <code>[ManagedGroup](#ManagedGroup)</code>  
<a name="Westley"></a>
## Westley
**Kind**: global class  

* [Westley](#Westley)
  * [new Westley()](#new_Westley_new)
  * [.clear()](#Westley+clear) ⇒ <code>[Westley](#Westley)</code>
  * [.execute(command)](#Westley+execute)
  * [.pad()](#Westley+pad) ⇒ <code>[Westley](#Westley)</code>
  * [.getDataset()](#Westley+getDataset) ⇒ <code>Object</code>
  * [.getHistory()](#Westley+getHistory) ⇒ <code>Array.&lt;String&gt;</code>

<a name="new_Westley_new"></a>
### new Westley()
Westley. Archive object dataset and history manager. Handles parsing and
revenge for the princess.

<a name="Westley+clear"></a>
### westley.clear() ⇒ <code>[Westley](#Westley)</code>
Clear the dataset and history

**Kind**: instance method of <code>[Westley](#Westley)</code>  
**Returns**: <code>[Westley](#Westley)</code> - Returns self  
<a name="Westley+execute"></a>
### westley.execute(command)
Execute a command - stored in history and modifies the dataset

**Kind**: instance method of <code>[Westley](#Westley)</code>  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>String</code> | The command to execute |

<a name="Westley+pad"></a>
### westley.pad() ⇒ <code>[Westley](#Westley)</code>
Insert a padding in the archive (used for delta tracking)

**Kind**: instance method of <code>[Westley](#Westley)</code>  
**Returns**: <code>[Westley](#Westley)</code> - Returns self  
<a name="Westley+getDataset"></a>
### westley.getDataset() ⇒ <code>Object</code>
Get the core dataset

**Kind**: instance method of <code>[Westley](#Westley)</code>  
<a name="Westley+getHistory"></a>
### westley.getHistory() ⇒ <code>Array.&lt;String&gt;</code>
Get the history (deltas)

**Kind**: instance method of <code>[Westley](#Westley)</code>  
<a name="PasswordGenerator"></a>
## PasswordGenerator
**Kind**: global class  

* [PasswordGenerator](#PasswordGenerator)
  * [new PasswordGenerator()](#new_PasswordGenerator_new)
  * _instance_
    * [.generatePassword([length])](#PasswordGenerator+generatePassword) ⇒ <code>String</code>
  * _static_
    * [.CharacterSet](#PasswordGenerator.CharacterSet) : <code>Object</code>
      * [.dash](#PasswordGenerator.CharacterSet.dash) : <code>[CharacterSet](#CharacterSet)</code>
      * [.lowerCaseLetters](#PasswordGenerator.CharacterSet.lowerCaseLetters) : <code>[CharacterSet](#CharacterSet)</code>
      * [.numbers](#PasswordGenerator.CharacterSet.numbers) : <code>[CharacterSet](#CharacterSet)</code>
      * [.special](#PasswordGenerator.CharacterSet.special) : <code>[CharacterSet](#CharacterSet)</code>
      * [.underscore](#PasswordGenerator.CharacterSet.underscore) : <code>[CharacterSet](#CharacterSet)</code>
      * [.upperCaseLetters](#PasswordGenerator.CharacterSet.upperCaseLetters) : <code>[CharacterSet](#CharacterSet)</code>
      * [.whitespace](#PasswordGenerator.CharacterSet.whitespace) : <code>[CharacterSet](#CharacterSet)</code>
    * [.DefaultPasswordLength](#PasswordGenerator.DefaultPasswordLength) : <code>Number</code>
    * [.MinimumCharacterSets](#PasswordGenerator.MinimumCharacterSets) : <code>Number</code>

<a name="new_PasswordGenerator_new"></a>
### new PasswordGenerator()
Password generator

<a name="PasswordGenerator+generatePassword"></a>
### passwordGenerator.generatePassword([length]) ⇒ <code>String</code>
Generate a password

**Kind**: instance method of <code>[PasswordGenerator](#PasswordGenerator)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [length] | <code>Number</code> | The length of the generated password (default: PASS_DEFAULT_LEN) |

<a name="PasswordGenerator.CharacterSet"></a>
### PasswordGenerator.CharacterSet : <code>Object</code>
Character sets for the password generator

**Kind**: static property of <code>[PasswordGenerator](#PasswordGenerator)</code>  

  * [.CharacterSet](#PasswordGenerator.CharacterSet) : <code>Object</code>
    * [.dash](#PasswordGenerator.CharacterSet.dash) : <code>[CharacterSet](#CharacterSet)</code>
    * [.lowerCaseLetters](#PasswordGenerator.CharacterSet.lowerCaseLetters) : <code>[CharacterSet](#CharacterSet)</code>
    * [.numbers](#PasswordGenerator.CharacterSet.numbers) : <code>[CharacterSet](#CharacterSet)</code>
    * [.special](#PasswordGenerator.CharacterSet.special) : <code>[CharacterSet](#CharacterSet)</code>
    * [.underscore](#PasswordGenerator.CharacterSet.underscore) : <code>[CharacterSet](#CharacterSet)</code>
    * [.upperCaseLetters](#PasswordGenerator.CharacterSet.upperCaseLetters) : <code>[CharacterSet](#CharacterSet)</code>
    * [.whitespace](#PasswordGenerator.CharacterSet.whitespace) : <code>[CharacterSet](#CharacterSet)</code>

<a name="PasswordGenerator.CharacterSet.dash"></a>
#### CharacterSet.dash : <code>[CharacterSet](#CharacterSet)</code>
Dash character set

**Kind**: static property of <code>[CharacterSet](#PasswordGenerator.CharacterSet)</code>  
<a name="PasswordGenerator.CharacterSet.lowerCaseLetters"></a>
#### CharacterSet.lowerCaseLetters : <code>[CharacterSet](#CharacterSet)</code>
Lower-case letters character set

**Kind**: static property of <code>[CharacterSet](#PasswordGenerator.CharacterSet)</code>  
<a name="PasswordGenerator.CharacterSet.numbers"></a>
#### CharacterSet.numbers : <code>[CharacterSet](#CharacterSet)</code>
Numbers character set

**Kind**: static property of <code>[CharacterSet](#PasswordGenerator.CharacterSet)</code>  
<a name="PasswordGenerator.CharacterSet.special"></a>
#### CharacterSet.special : <code>[CharacterSet](#CharacterSet)</code>
Special characters character set

**Kind**: static property of <code>[CharacterSet](#PasswordGenerator.CharacterSet)</code>  
<a name="PasswordGenerator.CharacterSet.underscore"></a>
#### CharacterSet.underscore : <code>[CharacterSet](#CharacterSet)</code>
Underscore character set

**Kind**: static property of <code>[CharacterSet](#PasswordGenerator.CharacterSet)</code>  
<a name="PasswordGenerator.CharacterSet.upperCaseLetters"></a>
#### CharacterSet.upperCaseLetters : <code>[CharacterSet](#CharacterSet)</code>
Upper-case letter character set

**Kind**: static property of <code>[CharacterSet](#PasswordGenerator.CharacterSet)</code>  
<a name="PasswordGenerator.CharacterSet.whitespace"></a>
#### CharacterSet.whitespace : <code>[CharacterSet](#CharacterSet)</code>
Whitespace character set

**Kind**: static property of <code>[CharacterSet](#PasswordGenerator.CharacterSet)</code>  
<a name="PasswordGenerator.DefaultPasswordLength"></a>
### PasswordGenerator.DefaultPasswordLength : <code>Number</code>
Default generated password length

**Kind**: static property of <code>[PasswordGenerator](#PasswordGenerator)</code>  
<a name="PasswordGenerator.MinimumCharacterSets"></a>
### PasswordGenerator.MinimumCharacterSets : <code>Number</code>
Minimum character sets allowed

**Kind**: static property of <code>[PasswordGenerator](#PasswordGenerator)</code>  
<a name="CharacterSet"></a>
## CharacterSet : <code>Object</code>
Password generator character set

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | The title of the character set |
| getChar | <code>function</code> | Get a character from the set |
| isValidTriplet | <code>function</code> | Validate a string of characters, up to 3 in length |
| regularity | <code>Number</code> | How regular the char can be: 1 is regular, higher is rare |
| validEndCap | <code>Boolean</code> | Whether the character set can be used for either end of the password |

