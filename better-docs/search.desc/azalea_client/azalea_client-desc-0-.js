searchState.loadedDescShard("azalea_client", 0, "Significantly abstract <code>azalea_protocol</code> so it’s actually …\nSomething that can join Minecraft servers.\nThe parameters that were passed for creating the …\n<code>Client</code> has the things that a user interacting with the …\nA component that contains some of the “settings” for …\nThis plugin group will add all the default plugins …\nA component only present in players that contains the …\nA component that keeps strong references to our …\nAn error that happened while joining the server.\nA bundle for the components that are present on a local …\nA player in the tab list.\nA component that contains a map of player UUIDs to their …\nA resource that contains a <code>broadcast::Sender</code> that will be …\nThe access token for authentication. You can obtain one of …\nThe parameters (i.e. email) that were passed for creating …\nWhether the client should show up as “Anonymous Player”…\nAttack the entity with the given id.\nRight click a block. The behavior of this depends on the …\nThe certificates used for chat signing.\nImplementations of chat-related features.\nSend a message in chat.\nWhether the messages sent from the server should have …\nThe types of chat messages the client wants to receive. …\nUsed for Minecraft’s chunk batching introduced in 23w31a …\nGet a component from this client. This will clone the …\nReturns the direction the client is looking. The first …\nDisconnect a client from the server.\nDisconnect this client from the server by ending all tasks.\nThe player’s display name in the tab list, but only if it…\nThe entity component system. You probably don’t need to …\nThe entity for this client in the ECS.\nReturn a lightweight <code>Entity</code> for the entity that matches …\nGet a component from an entity. Note that this will return …\nDefines the <code>Event</code> enum and makes those events trigger when …\nGet the position of this client’s eyes.\nThe main hunger bar. Goes from 0 to 20.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe current gamemode of the player, like survival or …\nGet a component from this client, or <code>None</code> if it doesn’t …\nGet a component from an entity, if it exists. This is …\nDo a handshake with the server and get to the game state …\nWhether the player has an attack cooldown.\nGet the health of this client.\nGet the hunger level of this client, which includes both …\nThe world is the combined <code>PartialInstance</code>s of all clients …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConnect to a Minecraft server.\nReturns whether the player will try to jump next tick.\nThe locale of the client.\nThe player’s latency in milliseconds. The bars in the …\nWhen enabled, the bot will mine any block that it is …\nReturns whether we have a received the login packet yet.\nReturn the menu that is currently open. If no menu is …\nThis will create an online-mode account by authenticating …\nSimilar to <code>Account::microsoft</code> but you can use your own …\nCreate a new client from the given <code>GameProfile</code>, ECS …\nCreate a new <code>InstanceHolder</code>.\nAn offline account does not authenticate with Microsoft’…\nThe partial instance is the world this client currently …\nGet an <code>RwLock</code> with a reference to the world that this …\nPing Minecraft servers.\nGet the position of this client.\nThe <code>GameProfile</code> for our client. This contains your …\nInformation about the player’s Minecraft account, …\nA convenience function for getting components of our player…\nRefresh the access_token for this account to be valid …\nRequest the certificates used for chat signing and set it …\nUse this to force the client to run the schedule outside …\nThe amount of saturation the player has. This isn’t …\nSend a chat message to the server. This only sends the …\nSend a command packet to the server. The <code>command</code> argument …\nTell the server we changed our game options (i.e. render …\nSets the direction the client is looking. <code>y_rot</code> is yaw …\nSet whether we’re jumping. This acts as if you held …\nStart sprinting in the given direction. To stop moving, …\nCreate a <code>Client</code> when you already have the ECS made with …\nGet a map of player UUIDs to their information in the tab …\nBorrowed from <code>bevy_core</code>.\nGet the username of this client.\nThe Minecraft username of the account.\nGet the Minecraft UUID of this client.\nOnly required for online-mode accounts.\nThe player’s UUID.\nGet the UUID of this account. This will generate an …\nThe view distance of the client in chunks, same as the …\nStart walking in the given direction. To sprint, use …\nThis will create an online-mode account through …\nSimilar to <code>Account::with_microsoft_access_token</code> but you …\nGet an <code>RwLock</code> with a reference to our (potentially shared) …\nWrite a packet directly to the server.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns how long it takes for the attack cooldown to reset …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA chat packet, either a system message or a chat message.\nA kind of chat packet, either a chat message or a command.\nA client received a chat message packet.\nSend a chat message (or command, if it starts with a …\nSend a chat packet to the server of a specific kind (chat …\nGet the content part of the message as a string. This does …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether this message was sent with /msg (or aliases). It …\nGet the message shown in chat for this packet.\nCreate a new ChatPacket from a string. This is meant to be …\nDetermine the username of the sender and content of the …\nGet the username of the sender of the message. If it’s …\nGet the UUID of the sender of the message. If it’s not a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAn event sent when a client is getting disconnected.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSystem that removes the <code>JoinedClientBundle</code> from the entity …\nA player joined the game (or more specifically, was added …\nA chat message was sent in the game chat.\nThe client player died in-game.\nThe client disconnected from the server.\nSomething that happened in-game, such as a tick passing or …\nHappens right after the bot switches into the Game state, …\nA <code>KeepAlive</code> packet was sent by the server.\nA component that contains an event sender for events that …\nThe client is now in the world. Fired when we receive a …\nWe received a packet from the server.\nA player left the game (or maybe is still in the game and …\nHappens 20 times per second, but only when the world is …\nA player was updated in the tab list (gamemode, display …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRight click a block. The behavior of this depends on the …\nA component that contains the number of changes this …\nA component that contains the block that the player is …\nA plugin that allows clients to interact with blocks in …\nSwing your arm. This is purely a visual effect and won’t …\nCheck if the item has the <code>CanDestroy</code> tag for the block.\nWhether we can’t interact with the block, based on your …\nThe local player entity that’s opening the container.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the block that a player would be looking at if their …\nThe coordinates of the container.\nClose a container without notifying the server.\nTell the server that we want to close a container.\nA component present on all local players that have an …\nEither an item in an inventory or nothing.\nAn item in an inventory, with a count and NBT. Usually you …\nA menu, which is a fixed collection of slots.\nSent from the server when a menu (like a chest or crafting …\nSent from the server when the contents of a container are …\nA fixed-size list of <code>ItemSlot</code>s.\nGet the <code>Player</code> from this <code>Menu</code>.\nConvert this slot into an <code>ItemSlotData</code>, if it’s present.\nThe item that is currently held by the cursor. <code>Slot::Empty</code> …\nRepresentations of various inventory data structures in …\nThe current container menu that the player has open. If no …\nThe custom name of the menu that’s currently open. This …\nReturn the contents of the menu, not including the player…\nReturn the amount of the item in the slot, or 0 if the …\nThe amount of the item in this slot.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the item in the player’s hotbar that is currently …\nGet the range of slot indexes that contain the player’s …\nThe ID of the container that’s currently open. Its value …\nThe ID of the container to close. 0 for the player’s …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA component that contains the player’s inventory menu. …\nCheck if the slot is ItemSlot::Empty, if the count is &lt;= …\nCheck if the count of the item is &lt;= 0 or if the item is …\nReturns whether the given protocol index is in the player…\nReturns whether the given index would be in the player’s …\nCheck if the slot is not ItemSlot::Empty, if the count is …\nWhether this item is the same as another item, ignoring …\nGet the <code>kind</code> of the item in this slot, or …\nReturns the number of slots in the menu.\nGet the maximum number of items that can be placed in this …\nWhether the item in the given slot could be clicked and …\nWhether the given item could be placed in this menu.\nReturns a reference to the currently active menu. If a …\nReturns a mutable reference to the currently active menu. …\nGet the range of slot indexes that contain the player’s …\nGet the range of slot indexes that contain the player’s …\nA set of the indexes of the slots that have been right …\nShift-click a slot in this menu.\nThe index of the item in the hotbar that’s currently …\nModify the inventory as if the given operation was …\nGet a reference to the <code>ItemSlot</code> at the given protocol …\nThe hotbar slot to select. This should be in the range …\nGet a mutable reference to the <code>ItemSlot</code> at the given …\nReturn the contents of the menu, including the player’s …\nRemove <code>count</code> items from this slot, returning the removed …\nRemove <code>count</code> items from this slot, returning the removed …\nAn identifier used by the server to track client inventory …\nUpdate whether this slot is empty, based on the count.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the maximum stack size for this item.\nWhether this item can be stacked with other items.\nAdd slot\nAdd a slot.\nCtrl + drop key (Q)\nMiddle click, only defined for creative players in …\nEnding drag\nEnding drag\nLeft mouse click. Note that in the protocol, None is …\nShift + left mouse click\nDrop cursor stack.\nDouble click\nShift click\nRight mouse click. Note that in the protocol, None is …\nShift + right mouse click (identical behavior)\nDrop cursor single item.\nDrop key (Q)\nStarting drag\nStarting drag\nUsed when you press number keys or F in an inventory.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nImpossible in vanilla clients.\nThe slot that we’re double clicking on. It should be …\nReturn the slot number that this operation is acting on, …\nA player left clicked on a block, used for stuff like …\nSent when we completed mining a block.\nA component that simulates the client holding down left …\nA component that stores the position of the block we’re …\nA component bundle for players that can mine blocks.\nA component that counts down until we start mining the …\nA component that contains the item we’re currently using …\nA plugin that allows clients to break blocks in the world.\nA component that stores the progress of the current mining …\nA component that stores the number of ticks that we’ve …\nInformation about the block we’re currently mining. This …\nStart mining the block at the given position.\nAbort mining a block.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAn event sent by the server that sets or adds to our …\nA component that contains the look direction that was last …\nComponent for entities that can move and sprint. Usually …\nThe directions that we can sprint in. It’s a subset of …\nAn event sent when the client starts sprinting. This does …\nAn event sent when the client starts walking. This does …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe system that makes the player start sprinting when they …\nThe system that makes the player start walking when they …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMakes the bot do one physics tick. Note that this is …\nMinecraft only sends a movement packet either after 20 …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAn event for sending a packet to the server while we’re …\nThe client entity that received the packet.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe packet that was actually received.\nA player joined the game (or more specifically, was added …\nEvent for when an entity dies. dies. If it’s a local …\nAn instance (aka world, dimension) was loaded by a client.\nA KeepAlive packet is sent from the server to verify that …\nAn event that’s sent when we receive a packet.\nA player left the game (or maybe is still in the game and …\nAn event for sending a packet to the server while we’re …\nA player was updated in the tab list of a local player …\nThe client entity that received the packet.\nThe local player entity that received this event.\nThe local player entity that received this event.\nThe local player entity that received this event.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe ID of the keepalive. This is an arbitrary number, but …\nThe random ID for this request to download the resource …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe packet that was actually received.\nPlugins can add to this set if they want to handle a …\nAn event that’s sent when we receive a login packet from …\nEvent for sending a login packet to the server.\nThe client entity that received the packet.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe packet that was actually received.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nPing a Minecraft server.\nPing a Minecraft server after we’ve already created a …\nPing a Minecraft server through a Socks5 proxy.\nA component for clients that can read and write packets to …\nStop every active task when this <code>RawConnection</code> is dropped.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether the connection is still alive.\nWrite the packet with the given state to the server.\nTell the server that we’re respawning.\nA plugin that makes <code>PerformRespawnEvent</code> send the packet to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nHelper for configuring and creating the default task …\nSetup of default task pools: <code>AsyncComputeTaskPool</code>, …\nDefines a simple way to determine how many threads to use …\nUsed to determine number of async compute threads to …\nUsed to determine number of compute threads to allocate\nInserts the default thread pools into the given resource …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUsed to determine number of IO threads to allocate\nUnder no circumstance use more than this many threads for …\nIf the number of physical cores is greater than …\nForce using at least this many threads\nIf the number of physical cores is less than …\nTarget using this percentage of total cores, clamped by …\nOptions for the <code>TaskPool</code> created at application start.")