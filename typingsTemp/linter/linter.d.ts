// Type definitions for linter (v0.12.0)
// Project: https://github.com/AtomLinter/Linter
// Definitions by: david-driscoll <https://github.com/david-driscoll/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Generated by: https://github.com/david-driscoll/atom-typescript-generator
// Generation tool by david-driscoll <https://github.com/david-driscoll/>
/// <reference path="../space-pen/space-pen.d.ts" />
declare module Linter {
    /**
     * linter package initialization, sets up the linter for usages by atom 
     */
    class LinterInitializer {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        config: Atom.Config;
    
        /**
         * Activate the plugin setting up StatusBarView and dicovering linters 
         */
        activate() : void;
    
        /**
         * deactivate the plugin and unregister all subscriptions 
         */
        deactivate() : void;
    
    }

    /**
     * InlineView
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class InlineView {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        remove() : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        render(messages? : any, editor? : Atom.TextEditor) : any;
    
    }

    /**
     * MessageBubble
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class MessageBubble extends SpacePen.View {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        static content(messages? : any) : any;
    
    }

    /**
     * The base linter view 
     */
    class LinterView {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        editor: Atom.TextEditor;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        statusBarView: SpacePen.View;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        statusBarSummaryView: SpacePen.View;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        inlineView: SpacePen.View;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        allLinters : any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        linters: Linter[];
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        totalProcessed: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        tempFile: Pathwatcher.File;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        messages: any /* default */;
    
        /**
         * Instantiate the views
         * 
         * editor - the editor on which to place highlighting and gutter annotations
         * statusBarView - shared StatusBarView between all linters
         * linters - global linter set to utilize for linting 
         */
        constructor(editor? : Atom.TextEditor, statusBarView? : any, statusBarSummaryView? : any, inlineView? : any, allLinters ? : any);
    
        /**
         * Initialize new linters (used on grammar change)
         * 
         * linters - global linter set to utilize for linting 
         */
        initLinters() : Linter[];
    
        /**
         * register config modifications handlers 
         */
        handleConfigChanges() : any;
    
        /**
         * register handlers for editor buffer events 
         */
        handleEditorEvents() : any;
    
        /**
         * lint the current file in the editor using the live buffer 
         */
        lint() : any;
    
        /**
         * Process the messages returned by linters and render them.
         * 
         * messages - An array of messages to annotate:
         *           :level  - the annotation error level ('error', 'warning', 'info')
         *           :range - The buffer range that the annotation should be placed 
         */
        processMessage(messages? : any, tempFileInfo? : any, linter? : any) : any;
    
        /**
         * Destroy all markers (and associated decorations) 
         */
        destroyMarkers() : void;
    
        /**
         * Create marker from message 
         */
        createMarker(message? : any) : Atom.Marker;
    
        /**
         * Pidgeonhole messages onto lines. Each line gets only one message,
         * the message with the highest level presides. Messages of unrecognizable
         * level (or silenced by config) will be skipped. 
         */
        sortMessagesByLine(messages? : any) : any;
    
        /**
         * Render gutter icons and highlights for all linter messages. 
         */
        display(messages? : any) : any;
    
        /**
         * Update the views for new messages 
         */
        updateViews() : void;
    
        /**
         * remove this view and unregister all its subscriptions 
         */
        remove() : any;
    
        /**
         * Invoke the given callback when the editor is destroyed.
         * @param callback? - {Function} to be called when the editor is destroyed.
         */
        onDidDestroy(callback? : Function) : EventKit.Disposable;
    
    }

    /**
     * The base class for linters.
     * Subclasses must at a minimum define the attributes syntax, cmd, and regex. 
     */
    class Linter {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        static syntax: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        editor: Atom.TextEditor;
    
        /**
         * A string or array containing the command line (with arguments) used to
         * lint. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        cmd: any /* default */;
    
        /**
         * A regex pattern used to extract information from the executable's output.
         * regex should construct match results for the following keys
         * 
         * message: the message to show in the linter views (required)
         * line: the line number on which to mark error (required if not lineStart)
         * lineStart: the line number to start the error mark (optional)
         * lineEnd: the line number on end the error mark (optional)
         * col: the column on which to mark, will utilize syntax scope to higlight the
         *      closest matching syntax element based on your code syntax (optional)
         * colStart: column to on which to start a higlight (optional)
         * colEnd: column to end highlight (optional) 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        regex: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        regexFlags: any /* default */;
    
        /**
         * current working directory, overridden in linters that need it 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        cwd: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        defaultLevel: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        linterName: string;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        executablePath: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        isNodeExecutable: boolean;
    
        /**
         * what does this mean? 
         */
        errorStream: any /* default */;
    
        /**
         * Construct a linter passing it's base editor 
         */
        constructor(editor? : Atom.TextEditor);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        destroy() : void;
    
        /**
         * Exists mostly so we can use statSync without slowing down linting.
         * TODO: Do this at constructor time? 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        _cachedStatSync(path? : any) : any;
    
        /**
         * get command and args for atom.BufferedProcess for execution 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        getCmdAndArgs(filePath? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getReportFilePath(filePath? : any) : any;
    
        /**
         * Provide the node executable path for use when executing a node
         *         linter 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        getNodeExecutablePath() : any;
    
        /**
         * Primary entry point for a linter, executes the linter then calls
         *         processMessage in order to handle standard output
         * 
         * Override this if you don't intend to use base command execution logic 
         */
        lintFile(filePath? : any, callback? : any) : Pathwatcher.File;
    
        /**
         * process the string result of a linter execution using the regex
         *          as the message builder
         * 
         * Override this in order to handle message processing in a different manner
         * for instance if the linter returns json or xml data 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        processMessage(message? : any, callback? : any) : any;
    
        /**
         * create a message from the regex match return
         * 
         * match - Options used to configure linting messages
         *   message: the message to show in the linter views (required)
         *   line: the line number on which to mark error (required if not lineStart)
         *   lineStart: the line number to start the error mark (optional)
         *   lineEnd: the line number on end the error mark (optional)
         *   col: the column on which to mark, will utilize syntax scope to higlight
         *        the closest matching syntax element based on your code syntax
         *        (optional)
         *   colStart: column to on which to start a higlight (optional)
         *   colEnd: column to end highlight (optional) 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        createMessage(match? : any) : any;
    
        /**
         * This is the method to override if you want to set a custom message
         *         not only the match.message but maybe concatenate an error|warning code
         * 
         * By default it returns the message field. 
         */
        formatMessage(match? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        lineLengthForRow(row? : number) : number;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getEditorScopesForPosition(position? : TextBuffer.Point | { row: number; column: number } | [number, number]) : TextBuffer.Point;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        getGetRangeForScopeAtPosition(innerMostScope? : Atom.Scope, position? : TextBuffer.Point | { row: number; column: number } | [number, number]) : TextBuffer.Range;
    
        /**
         * This is the logic by which we automatically determine the range
         *          in the buffer that we should highlight for various combinations
         *          of line, lineStart, lineEnd, col, colStart, and colEnd values
         *          passed by the regex match.
         * 
         * It is highly recommended that you utilize this logic if you are not managing
         * your own range construction logic in your linter
         * 
         * match - Options used to configure linting messages
         *   message: the message to show in the linter views (required)
         *   line: the line number on which to mark error (required if not lineStart)
         *   lineStart: the line number to start the error mark (optional)
         *   lineEnd: the line number on end the error mark (optional)
         *   col: the column on which to mark, will utilize syntax scope to higlight
         *        the closest matching syntax element based on your code syntax
         *        (optional)
         *   colStart: column to on which to start a higlight (optional)
         *   colEnd: column to end highlight (optional) 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        computeRange(match? : any) : TextBuffer.Range;
    
    }

    /**
     * Status Bar View 
     */
    class StatusBarSummaryView {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        remove() : any;
    
        /**
         * Render the view 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        render(messages? : any, editor? : Atom.TextEditor) : any;
    
    }

    /**
     * StatusBarSummary
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class StatusBarSummary extends SpacePen.View {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        static content(messages? : any, editor? : Atom.TextEditor, info? : any, warning? : any, error? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        initialize(messages? : any, editor? : Atom.TextEditor) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        detached() : any;
    
    }

    /**
     * Status Bar View 
     */
    class StatusBarView extends SpacePen.View {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        static content() : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        initialize() : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        highlightLines(currentLine? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        detached() : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        computeMessages(messages? : any, position? : TextBuffer.Point | { row: number; column: number } | [number, number], currentLine? : any, limitOnErrorRange? : TextBuffer.Range) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        filterInfoMessages(messages? : any, config? : any) : any;
    
        /**
         * Render the view 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        render(messages? : any, editor? : Atom.TextEditor) : any;
    
    }

}
declare module "linter" {
    export = Linter.Linter;
}
